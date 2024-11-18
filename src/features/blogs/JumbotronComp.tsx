// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
const JumbotronComp = () => {
  return (
    <section className="flex w-full flex-col items-center space-y-3 overflow-hidden bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 p-5 text-center">
      <div
        className="flex w-full flex-col items-center px-5 py-10 text-center md:px-16 md:py-16"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-red-100 md:text-5xl">
          Belku Blogs
        </h2>
        <p className="mt-4 text-lg font-medium text-red-100 md:max-w-3xl md:text-xl">
          Welcome to the world of sambal! Our sambal collection is a blend of
          spicy and flavorful stories, crafted by food enthusiasts, chefs, and
          true sambal lovers. Here’s what you can discover in our sambal
          universe! 🌶️
        </p>
      </div>

      {/* <div className="flex w-full max-w-sm items-center space-x-2 p-2">
        <Input type="email" placeholder="Search for articles" />
        <Button type="submit">Search</Button>
      </div> */}
    </section>
  );
};

export default JumbotronComp;
