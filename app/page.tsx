export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="flex h-screen flex-col items-center justify-center bg-blue-200">
        <p className="font-bold">CTA Section</p>
      </section>
      <section className="flex h-screen flex-col items-center justify-center bg-green-200">
        <p className="font-bold">Trusted Companies</p>
      </section>
      <section className="flex h-screen flex-col items-center justify-center bg-purple-200">
        <p className="font-bold">Photo Gallery</p>
      </section>
      <section className="flex h-screen flex-col items-center justify-center bg-red-300">
        <p className="font-bold">Contact Us</p>
      </section>
    </div>
  );
}
