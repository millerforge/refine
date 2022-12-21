import * as React from "react";
import { SVGProps } from "react";

const SvgAboutUs = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className ? className : undefined}
        {...props}
    >
        <path
            opacity="0.75"
            d="M16 0C7.16 0 0 7.16 0 16C0 24.84 7.16 32 16 32C24.84 32 32 24.84 32 16C32 7.16 24.84 0 16 0ZM16 30.67C7.9 30.67 1.33 24.1 1.33 16C1.33 7.9 7.9 1.33 16 1.33C24.1 1.33 30.67 7.9 30.67 16C30.67 24.1 24.1 30.67 16 30.67ZM26.48 17.02C26.22 16.78 25.94 16.57 25.63 16.4C25.54 16.35 25.44 16.3 25.35 16.25C25.43 16.18 25.51 16.11 25.58 16.03C25.82 15.78 26.02 15.49 26.17 15.17C26.36 14.76 26.47 14.31 26.47 13.83C26.47 12.09 25.05 10.67 23.31 10.67C22.45 10.67 21.68 11.01 21.11 11.57C20.72 11.95 20.43 12.43 20.28 12.96C20.28 12.98 20.27 13.01 20.26 13.03C20.19 13.28 20.16 13.55 20.16 13.82C20.16 13.84 20.16 13.86 20.16 13.88C20.16 14.34 20.28 14.77 20.46 15.16C20.51 15.28 20.58 15.39 20.64 15.5C20.76 15.69 20.9 15.86 21.05 16.02C21.12 16.1 21.2 16.17 21.28 16.24C21.18 16.29 21.09 16.34 21 16.39C20.69 16.56 20.41 16.77 20.15 17.01C20.09 17.06 20.04 17.11 19.98 17.17C19.91 17.24 19.84 17.32 19.77 17.39C19.69 17.33 19.61 17.27 19.53 17.21C19.46 17.16 19.39 17.11 19.32 17.07C19 16.86 18.67 16.68 18.31 16.53C18.19 16.48 18.08 16.44 17.96 16.4C18.07 16.34 18.17 16.27 18.28 16.2C18.59 15.98 18.86 15.72 19.09 15.43C19.44 14.98 19.7 14.45 19.84 13.87C19.84 13.87 19.84 13.85 19.84 13.84C19.9 13.57 19.93 13.29 19.94 13C19.94 12.99 19.94 12.98 19.94 12.97C19.94 12.38 19.81 11.82 19.58 11.32C18.95 9.96 17.57 9.01 15.97 9.01C14.37 9.01 12.99 9.96 12.36 11.32C12.13 11.82 12 12.38 12 12.97C12 12.98 12 12.99 12 13C12 13.29 12.03 13.56 12.09 13.83C12.09 13.83 12.09 13.85 12.09 13.86C12.22 14.44 12.48 14.97 12.84 15.42C13.07 15.71 13.35 15.98 13.65 16.2C13.75 16.27 13.86 16.34 13.97 16.4C13.85 16.44 13.73 16.49 13.62 16.53C13.27 16.68 12.93 16.86 12.61 17.07C12.54 17.12 12.47 17.16 12.4 17.21C12.32 17.27 12.24 17.33 12.16 17.39C12.09 17.31 12.02 17.24 11.95 17.17C11.9 17.12 11.84 17.06 11.78 17.01C11.52 16.77 11.24 16.56 10.93 16.39C10.84 16.34 10.74 16.29 10.65 16.24C10.73 16.17 10.81 16.1 10.88 16.02C11.03 15.86 11.17 15.69 11.29 15.5C11.36 15.39 11.42 15.28 11.47 15.16C11.65 14.77 11.76 14.33 11.77 13.88C11.77 13.86 11.77 13.84 11.77 13.82C11.77 13.55 11.73 13.28 11.67 13.03C11.67 13.01 11.66 12.98 11.65 12.96C11.5 12.43 11.21 11.95 10.82 11.57C10.25 11.01 9.47 10.67 8.62 10.67C6.88 10.67 5.47 12.09 5.47 13.83C5.47 14.31 5.58 14.77 5.77 15.17C5.92 15.49 6.12 15.78 6.36 16.02C6.43 16.1 6.51 16.17 6.59 16.24C6.49 16.29 6.4 16.34 6.31 16.39C6 16.56 5.72 16.77 5.46 17.01C4.53 17.87 3.94 19.09 3.94 20.46C3.94 21.03 4.4 21.49 4.98 21.49H9.91C9.9 21.59 9.89 21.69 9.88 21.79C9.88 21.9 9.87 22.02 9.87 22.14C9.87 22.24 9.88 22.33 9.91 22.42C10.03 22.86 10.43 23.17 10.91 23.17H20.99C21.46 23.17 21.86 22.85 21.99 22.41C22.02 22.32 22.03 22.23 22.03 22.13C22.03 22.01 22.03 21.9 22.02 21.78C22.02 21.68 22 21.58 21.99 21.48H26.92C27.49 21.48 27.96 21.02 27.96 20.45C27.96 19.09 27.37 17.86 26.44 17L26.48 17.02ZM21.2 13.98C21.2 13.98 21.2 13.88 21.2 13.83C21.2 13.61 21.23 13.4 21.3 13.19C21.57 12.33 22.37 11.7 23.32 11.7C24.49 11.7 25.44 12.65 25.44 13.82C25.44 14.47 25.14 15.06 24.68 15.45C24.61 15.51 24.54 15.56 24.46 15.61C24.22 15.76 23.95 15.87 23.66 15.92C23.55 15.94 23.44 15.95 23.32 15.95C23.2 15.95 23.09 15.95 22.98 15.92C22.69 15.87 22.42 15.77 22.18 15.62C22.1 15.57 22.03 15.52 21.96 15.46C21.53 15.1 21.25 14.57 21.21 13.98H21.2ZM13.16 13.73C13.09 13.49 13.06 13.23 13.06 12.97C13.06 12.94 13.06 12.92 13.06 12.89C13.1 11.31 14.4 10.04 15.99 10.04C17.58 10.04 18.88 11.31 18.92 12.89C18.92 12.92 18.92 12.94 18.92 12.97C18.92 13.23 18.88 13.49 18.82 13.73C18.62 14.49 18.12 15.12 17.45 15.51C17.22 15.64 16.97 15.75 16.71 15.81C16.54 15.85 16.37 15.88 16.19 15.89C16.12 15.89 16.05 15.89 15.98 15.89C15.91 15.89 15.84 15.89 15.77 15.89C15.59 15.88 15.42 15.85 15.25 15.81C14.99 15.74 14.74 15.64 14.51 15.51C13.85 15.13 13.35 14.49 13.14 13.73H13.16ZM6.55 13.83C6.55 12.66 7.5 11.71 8.67 11.71C9.62 11.71 10.43 12.34 10.69 13.2C10.75 13.4 10.79 13.61 10.79 13.83C10.79 13.88 10.79 13.93 10.79 13.97C10.75 14.56 10.47 15.09 10.04 15.45C9.97 15.51 9.9 15.56 9.82 15.61C9.58 15.76 9.31 15.87 9.02 15.91C8.91 15.93 8.8 15.94 8.68 15.94C8.56 15.94 8.45 15.94 8.34 15.91C8.05 15.86 7.78 15.76 7.54 15.6C7.46 15.55 7.39 15.5 7.32 15.44C6.86 15.05 6.56 14.47 6.56 13.81L6.55 13.83ZM10.27 20.12C10.27 20.12 10.26 20.15 10.25 20.17C10.22 20.27 10.18 20.37 10.16 20.47H5.04V20.45C5.04 20.36 5.04 20.26 5.05 20.17C5.08 19.81 5.16 19.46 5.29 19.14C5.63 18.28 6.28 17.59 7.1 17.19C7.2 17.14 7.31 17.1 7.41 17.06C7.76 16.93 8.13 16.85 8.52 16.84C8.57 16.84 8.62 16.84 8.67 16.84C8.72 16.84 8.77 16.84 8.82 16.84C9.21 16.86 9.58 16.93 9.93 17.06C10.04 17.1 10.14 17.14 10.24 17.19C10.3 17.22 10.36 17.25 10.41 17.28C10.5 17.33 10.58 17.38 10.66 17.43C10.87 17.57 11.06 17.72 11.23 17.9C11.29 17.96 11.35 18.02 11.41 18.09C11.42 18.1 11.43 18.11 11.44 18.13C11.37 18.21 11.31 18.28 11.24 18.36C11.23 18.38 11.21 18.4 11.2 18.42C10.8 18.93 10.48 19.51 10.26 20.14L10.27 20.12ZM21.03 22.14H10.96C10.96 22.14 10.96 22.11 10.96 22.09C10.96 22.01 10.96 21.92 10.96 21.84C10.96 21.82 10.96 21.81 10.96 21.79C10.96 21.73 10.97 21.67 10.98 21.6C10.98 21.56 10.98 21.52 10.99 21.49C11.02 21.25 11.07 21.02 11.13 20.8C11.13 20.78 11.14 20.76 11.15 20.74C11.18 20.64 11.21 20.55 11.24 20.45C11.28 20.35 11.31 20.25 11.36 20.15C11.52 19.78 11.71 19.44 11.95 19.12C11.98 19.09 12 19.05 12.03 19.02C12.09 18.94 12.16 18.86 12.23 18.78C12.4 18.58 12.59 18.4 12.8 18.23C12.82 18.21 12.84 18.2 12.86 18.18C12.95 18.11 13.03 18.05 13.12 17.98C13.5 17.72 13.91 17.5 14.36 17.35C14.64 17.25 14.93 17.18 15.23 17.13C15.46 17.09 15.7 17.07 15.94 17.07C15.96 17.07 15.98 17.07 16.01 17.07C16.04 17.07 16.05 17.07 16.07 17.07C16.31 17.07 16.55 17.09 16.79 17.13C17.09 17.18 17.38 17.25 17.66 17.35C18.1 17.5 18.52 17.72 18.9 17.98C18.99 18.04 19.08 18.11 19.16 18.18C19.18 18.2 19.2 18.21 19.22 18.23C19.42 18.4 19.61 18.58 19.79 18.78C19.86 18.86 19.92 18.94 19.99 19.02C20.02 19.05 20.04 19.09 20.07 19.12C20.3 19.44 20.5 19.78 20.66 20.15C20.7 20.25 20.74 20.35 20.78 20.45C20.81 20.54 20.84 20.64 20.87 20.74C20.87 20.76 20.88 20.78 20.89 20.8C20.95 21.02 21 21.25 21.03 21.49C21.03 21.53 21.03 21.56 21.04 21.6C21.04 21.66 21.05 21.73 21.06 21.79V21.84C21.06 21.84 21.09 22.09 21.07 22.14H21.03ZM21.82 20.46C21.79 20.36 21.76 20.26 21.73 20.16C21.73 20.14 21.72 20.13 21.71 20.11C21.49 19.48 21.17 18.91 20.77 18.39C20.77 18.39 20.74 18.35 20.73 18.33C20.67 18.25 20.6 18.17 20.53 18.1C20.53 18.09 20.55 18.08 20.56 18.06C20.62 17.99 20.68 17.93 20.74 17.87C20.92 17.69 21.11 17.54 21.32 17.4C21.4 17.35 21.48 17.3 21.57 17.25C21.63 17.22 21.68 17.19 21.74 17.16C21.84 17.11 21.95 17.07 22.06 17.03C22.19 16.98 22.33 16.94 22.47 16.9C22.7 16.85 22.93 16.81 23.17 16.8C23.22 16.8 23.27 16.8 23.32 16.8C23.76 16.8 24.19 16.88 24.58 17.03C24.69 17.07 24.79 17.11 24.89 17.16C25.05 17.24 25.2 17.32 25.34 17.42C25.95 17.83 26.43 18.42 26.7 19.11C26.83 19.43 26.91 19.78 26.94 20.15C26.94 20.25 26.95 20.35 26.95 20.45H21.82V20.46Z"
            fill="url(#paint0_linear_1546_2286)"
        />
        <defs>
            <linearGradient
                id="paint0_linear_1546_2286"
                x1="16"
                y1="0"
                x2="16"
                y2="32"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#3FDCF7" />
                <stop offset="1" stopColor="#1890FF" />
            </linearGradient>
        </defs>
    </svg>
);

export default SvgAboutUs;
