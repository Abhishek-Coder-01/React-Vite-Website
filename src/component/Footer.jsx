
function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]">
      <div className="container mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[hsl(var(--foreground))/0.7]">© <span id="year"></span> Abhishek Yadav. All rights
          reserved.</p>
      </div>

    </footer>
  )
}

export default Footer
