"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function Sheet(props: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root {...props} />
}

export function SheetTrigger(
  props: React.ComponentProps<typeof SheetPrimitive.Trigger>
) {
  return <SheetPrimitive.Trigger {...props} />
}

export function SheetClose(
  props: React.ComponentProps<typeof SheetPrimitive.Close>
) {
  return <SheetPrimitive.Close {...props} />
}

export function SheetPortal(
  props: React.ComponentProps<typeof SheetPrimitive.Portal>
) {
  return <SheetPrimitive.Portal {...props} />
}

export function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

export function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
}) {
  return (
    <SheetPortal>
      <SheetOverlay />

      <SheetPrimitive.Content
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-background p-6 shadow-lg transition ease-in-out duration-300",

          // POSIÇÕES
          side === "right" &&
            "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm border-l",
          side === "left" &&
            "inset-y-0 left-0 h-full w-3/4 sm:max-w-sm border-r",
          side === "top" &&
            "inset-x-0 top-0 border-b",
          side === "bottom" &&
            "inset-x-0 bottom-0 border-t",

          // ANIMAÇÕES (CORRETAS)
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",

          side === "right" &&
            "data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
          side === "left" &&
            "data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
          side === "top" &&
            "data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
          side === "bottom" &&
            "data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",

          className
        )}
        {...props}
      >
        {children}

        <SheetPrimitive.Close asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
          >
            <X className="w-4 h-4" />
          </Button>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

export function SheetHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props} />
  )
}

export function SheetFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("mt-auto flex flex-col gap-2", className)} {...props} />
  )
}

export function SheetTitle(
  props: React.ComponentProps<typeof SheetPrimitive.Title>
) {
  return (
    <SheetPrimitive.Title
      className="text-lg font-semibold"
      {...props}
    />
  )
}

export function SheetDescription(
  props: React.ComponentProps<typeof SheetPrimitive.Description>
) {
  return (
    <SheetPrimitive.Description
      className="text-sm text-muted-foreground"
      {...props}
    />
  )
}