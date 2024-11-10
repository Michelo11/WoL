"use client";

export default function Home() {
  return (
    <main className="md:w-1/3 w-1/2 flex flex-col gap-6 justify-center m-auto">
      <h1>Wake on LAN</h1>
      <form
        onSubmit={async (e) => {
          const form = new FormData(e.target as HTMLFormElement);
          const token = form.get("token") as string;

          const res = await fetch("/api/wol", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
          });

          if (res.ok) alert("Sent");
          else alert("Failed");
        }}
        className="w-full flex flex-col gap-3"
      >
        <input type="password" name="token" placeholder="Token" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
