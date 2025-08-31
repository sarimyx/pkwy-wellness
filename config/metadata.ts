import { Metadata } from "next";
import { Identity } from "./identity";

export const metadata: Metadata = {
    metadataBase: new URL(Identity.url),
    title: "PKWY Wellness | Pilates | Pittsburgh, PA",
    description: "Transform your body and mind with expert Pilates instruction. Private sessions, group classes, and corporate wellness programs. Serving Pittsburgh and surrounding areas.",
    keywords: "Pilates Pittsburgh, Pilates studio Pittsburgh PA, Pilates classes Pittsburgh, Pilates instructor Pittsburgh, wellness Pittsburgh, fitness Pittsburgh, Pilates private sessions Pittsburgh, corporate wellness Pittsburgh",
    openGraph: {
        siteName: "PKWY Wellness",
        title: {
            default: "PKWY Wellness | Pilates | Pittsburgh, PA",
            template: "%s | PKWY Wellness Pittsburgh",
        },
        description: "Transform your body and mind with expert Pilates instruction. Private sessions, group classes, and corporate wellness programs. Serving Pittsburgh and surrounding areas.",
        url: Identity.url,
        images: ["/branding/logo.png"],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "PKWY Wellness | Pilates | Pittsburgh, PA",
        description: "Expert instruction, private sessions, and group classes.",
        images: ["/branding/logo.png"],
    },
    alternates: {
        canonical: Identity.url,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};