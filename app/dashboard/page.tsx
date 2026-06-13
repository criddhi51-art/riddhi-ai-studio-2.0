import Image from "next/image"
import {
  Bot,
  CreditCard,
  Home,
  Library,
  Mic,
  Settings,
  Sparkles,
  UserRound,
  Video,
  WalletCards,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "Home", icon: Home, active: true },
  { name: "AI Video Agent", icon: Bot },
  { name: "AI Video Avatar", icon: Video },
  { name: "Avatar", icon: UserRound },
  { name: "AI Voice Cloning", icon: Mic },
  { name: "My Library", icon: Library },
]

const features = [
  {
    name: "AI Video Agent",
    description:
      "Build guided video agents that explain, answer, and present with polish.",
    icon: Bot,
    media: "/globe.svg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    name: "AI Video Avatar",
    description:
      "Create camera-ready avatar videos for product, learning, and support flows.",
    icon: Video,
    media: "/window.svg",
    className: "md:col-span-2",
  },
  {
    name: "Avatar",
    description:
      "Design reusable on-brand personas for your studio projects.",
    icon: UserRound,
    media: "/file.svg",
  },
  {
    name: "AI Voice Cloning",
    description:
      "Generate consistent voice performances for scripts and campaigns.",
    icon: Mic,
    media: "/next.svg",
  },
  {
    name: "My Library",
    description:
      "Keep generated videos, avatars, and voice assets organized in one place.",
    icon: Library,
    media: "/vercel.svg",
    className: "md:col-span-2",
  },
]

function isVideoAsset(src: string) {
  return /\.(mp4|webm|mov)$/i.test(src)
}

function FeatureMedia({ src, name }: { src: string; name: string }) {
  if (isVideoAsset(src)) {
    return (
      <video
        className="absolute inset-0 size-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
        aria-label={`${name} preview`}
      >
        <source src={src} />
      </video>
    )
  }

  return (
    <Image
      src={src}
      alt=""
      fill
      className="object-cover opacity-55 mix-blend-screen"
      sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"
      priority={src === "/globe.svg"}
      unoptimized={src.endsWith(".svg")}
    />
  )
}

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <Sidebar className="border-sidebar-border bg-zinc-950 text-zinc-100">
        <SidebarHeader className="gap-3 p-4">
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-white text-zinc-950">
              <Sparkles className="size-5" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                Riddhi AI Studio
              </p>
              <p className="truncate text-xs text-zinc-400">
                Creative dashboard
              </p>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigationItems.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      isActive={item.active}
                      className={cn(
                        "h-10 text-zinc-300 hover:bg-white/10 hover:text-white data-active:bg-white data-active:text-zinc-950",
                        item.active && "shadow-sm"
                      )}
                    >
                      <item.icon className="size-4" />
                      <span>{item.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="mt-auto gap-3 p-4">
          <SidebarSeparator className="mx-0 bg-white/10" />
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <Settings className="size-4 text-zinc-300" />
              User billing settings
            </div>
            <div className="mt-3 flex items-center justify-between rounded-md bg-black/25 px-3 py-2">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <WalletCards className="size-4" />
                Available credits
              </div>
              <span className="text-sm font-semibold tabular-nums text-white">
                1,240
              </span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="min-h-svh bg-zinc-950 text-white">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-white/10 bg-zinc-950/85 px-4 backdrop-blur-xl md:px-8">
          <SidebarTrigger className="text-zinc-300 hover:bg-white/10 hover:text-white md:hidden" />
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
              Home
            </p>
            <h1 className="text-xl font-semibold tracking-normal text-white">
              Dashboard
            </h1>
          </div>
        </header>

        <main className="flex-1 px-4 py-5 md:px-8 md:py-8">
          <section className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4 lg:auto-rows-[240px]">
            {features.map((feature) => (
              <article
                key={feature.name}
                className={cn(
                  "group relative isolate flex min-h-[220px] overflow-hidden rounded-lg border border-white/10 bg-zinc-900 p-5 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:border-white/20",
                  feature.className
                )}
              >
                <FeatureMedia src={feature.media} name={feature.name} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_32%),linear-gradient(135deg,rgba(0,0,0,0.88),rgba(0,0,0,0.5)_48%,rgba(0,0,0,0.86))]" />
                <div className="relative z-10 flex h-full w-full flex-col justify-between">
                  <div className="flex size-11 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white backdrop-blur">
                    <feature.icon className="size-5" />
                  </div>
                  <div className="max-w-md">
                    <h2 className="text-2xl font-semibold tracking-normal text-white">
                      {feature.name}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
