import localFont from "next/font/local";

export const neueMontreal = localFont({
    src: [
        {
            path: "./neue-montreal/NeueMontreal-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./neue-montreal/NeueMontreal-LightItalic.otf",
            weight: "300",
            style: "italic",
        },
        {
            path: "./neue-montreal/NeueMontreal-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./neue-montreal/NeueMontreal-Italic.otf",
            weight: "400",
            style: "italic",
        },
        {
            path: "./neue-montreal/NeueMontreal-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./neue-montreal/NeueMontreal-MediumItalic.otf",
            weight: "500",
            style: "italic",
        },
        {
            path: "./neue-montreal/NeueMontreal-Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./neue-montreal/NeueMontreal-BoldItalic.otf",
            weight: "700",
            style: "italic",
        },
    ],
    variable: "--font-neue-montreal",
    display: "swap",
});

export const featureDisplay = localFont({
    src: [
        {
            path: "./feature-display/FeatureDisplay-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./feature-display/FeatureDisplay-LightItalic.otf",
            weight: "300",
            style: "italic",
        },
        {
            path: "./feature-display/FeatureDisplay-Regular.otf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-feature-display",
    display: "swap",
});