import * as React from "react"

const Card = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={`rounded-lg border border-zinc-800 bg-zinc-950/50 text-white shadow-sm ${className}`}{...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={`flex flex-col space-y-1.5 ${className}`}{...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
    <h3 ref={ref} className={`text-2xl font-semibold leading-none tracking-tight ${className}`}{...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
    <p ref={ref} className={`text-sm text-zinc-400 ${className}`}{...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={`${className}`} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={`flex items-center ${className}`}{...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }