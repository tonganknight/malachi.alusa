export const ContactMeForm = () => {
  return (
    <div className="w-full px-5 pb-8 flex justify-center mt-5">
      <div className="card w-full max-w-sm bg-forground bg-foreground border border-edge-primary shadow-lg">
        <div className="card-body p-5 sm:p-6">
          <form className="flex flex-col gap-4">
            <label className="font-label text-secondary text-xs font-bold uppercase tracking-[0.12em]">
              Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full bg-background border-edge-primary text-secondary placeholder:text-primary/45"
            />

            <label className="font-label text-secondary text-xs font-bold uppercase tracking-[0.12em]">
              Email
            </label>
            <input
              type="email"
              placeholder="john@engineer.io"
              className="input input-bordered w-full bg-background border-edge-primary text-secondary placeholder:text-primary/45"
            />

            <label className="font-label text-secondary text-xs font-bold uppercase tracking-[0.12em]">
              Message
            </label>
            <textarea
              placeholder="How can we help?"
              className="textarea textarea-bordered min-h-[110px] w-full resize-none bg-background border-edge-primary text-secondary placeholder:text-primary/45"
            />

            <button
              type="submit"
              className="btn mt-2 w-full border-none text-[26px] font-headline normal-case text-[#411d8f] bg-[linear-gradient(90deg,#a78bfa,#22d3ee)] hover:brightness-110"
            >
              Send Message {">"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
