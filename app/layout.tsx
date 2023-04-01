import "#/styles/globals.css";

export const metadata = {
    title: {
        default: "Eventsradar",
        template: "%s | Next.js App Router",
    },
    description:
        "A platform for finding and sharing events in your area."
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) 
{
    return (
        <html lang="en" className="[color-scheme:dark]">
            <head><title>Eventsradar</title></head>
            {children}
        </html>
    );
}
