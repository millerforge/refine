import { NODE_ENV } from "@definitions/node";
import { ProjectTypes } from "@definitions/projectTypes";
import { ENV, parseNodeEnv } from "@utils/env";
import { getOS } from "@utils/os";
import { getInstalledRefinePackages } from "@utils/package";
import { getProjectType } from "@utils/project";
import fetch from "node-fetch";

interface TelemetryData {
    nodeEnv?: NODE_ENV;
    nodeVersion: string;
    os: string;
    osVersion: string;
    command: string;
    packages: {
        name: string;
        version: string;
    }[];
    projectFramework: ProjectTypes;
}

export const getTelemetryData = async (): Promise<TelemetryData> => {
    const os = await getOS();

    const data = {
        nodeEnv: parseNodeEnv(),
        nodeVersion: process.version,
        os: os.name,
        osVersion: os.version,
        command: process.argv[2],
        packages: await getInstalledRefinePackages(),
        projectFramework: getProjectType(),
    };

    return data;
};

export const telemetryHook = async () => {
    if (ENV.REFINE_NO_TELEMETRY === "true") return;

    try {
        const data = await getTelemetryData();

        fetch("https://telemetry.refine.dev/cli", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {}
};
