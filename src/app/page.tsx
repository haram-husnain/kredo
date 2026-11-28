export default function Home() {
  return (
    <div className="dark flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <main className="flex flex-col items-center justify-between gap-4 px-4 text-center">
        <div>
          <h1 className="text-5xl font-heading font-medium tracking-tight text-foreground sm:text-6xl">Kredo</h1>
          <h3  className="font-light text-muted-foreground max-w-2xl">Money that protects itself.</h3>
        </div>
      </main>
      
    </div>
  );
}
