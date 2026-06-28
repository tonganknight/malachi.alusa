import { ContactMeEnum } from "@/app/types/ContactMeEnum";

export const ContactMeForm = () => {
  return (
    <div className="w-full px-5 pb-8 flex justify-center mt-5">
      <div className="card w-full max-w-sm bg-forground bg-foreground border border-edge-primary shadow-lg">
        <div className="card-body p-5 sm:p-6">
          <form className="flex flex-col gap-4">
            <label className="font-label text-secondary text-xs font-bold uppercase tracking-[0.12em]">
              {ContactMeEnum.NameLabel}
            </label>
            <input
              type="text"
              placeholder={ContactMeEnum.NamePlaceholder}
              className="input input-bordered w-full bg-background border-edge-primary text-secondary placeholder:text-primary/45"
            />

            <label className="font-label text-secondary text-xs font-bold uppercase tracking-[0.12em]">
              {ContactMeEnum.EmailLabel}
            </label>
            <input
              type="email"
              placeholder={ContactMeEnum.EmailPlaceholder}
              className="input input-bordered w-full bg-background border-edge-primary text-secondary placeholder:text-primary/45"
            />

            <label className="font-label text-secondary text-xs font-bold uppercase tracking-[0.12em]">
              {ContactMeEnum.MessageLabel}
            </label>
            <textarea
              placeholder={ContactMeEnum.MessagePlaceholder}
              className="textarea textarea-bordered min-h-[110px] w-full resize-none bg-background border-edge-primary text-secondary placeholder:text-primary/45"
            />

            <button
              type="submit"
              className="btn mt-2 w-full  font-label font-bold border-none text-[20px] font-headline normal-case text-[#411d8f] bg-[linear-gradient(90deg,#a78bfa,#22d3ee)] hover:brightness-110"
            >
              {ContactMeEnum.SendMessageButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
