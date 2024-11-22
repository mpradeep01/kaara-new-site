import ButtonAnimated from "@/components/animations/ButtonAnimated";
import FlipLink from "@/components/animations/FlipLink";
import Center from "@/components/Center";
import FormElements from "@/components/FormElements/FormElements";
import Link from "next/link";
//import { IoIosArrowRoundForward } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="xs:my-10 md:my-40" id="footer">
      <Center>
        <div className="gap-10  xs:flex xs:flex-col md:grid md:grid-cols-[2fr_1fr] ">
          <div>
            <h3 className="h3-title font-bosch">
              <span className="text-primary-500">Let&apos;s start</span> a
              conversation
            </h3>
            <h4 className="font-light text-4xl">
              Have any questions?
              <br /> We&apos;d love to hear from you.
            </h4>
            <div className="w-full max-w-[287px] flex flex-col gap-1 mt-12">
              <FormElements placeholder="Name" />
              <FormElements placeholder="Email" />
              <FormElements placeholder="Phone" />
              <FormElements placeholder="Comment" />

              <div className="flex justify-end mt-4">
                {/* <button className="flex gap-1  items-center bg-primary-600 text-white pl-5 pr-3 py-2">
                  Send <IoIosArrowRoundForward className="text-3xl" />
                </button> */}
                <ButtonAnimated> Send</ButtonAnimated>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-primary-50 bg-opacity-10 p-10">
              <h6 className="font-bosch text-[20px] text-primary-500">
                Contact
              </h6>
              <p>Call - 04046046786</p>
              <p>Email - info@kaaratech.com</p>
              <h6 className="font-bosch text-[20px] text-primary-500">
                Location
              </h6>
              <p>
                Arka Heights, 3rd floor, pno 125& 126, Lumbini layout,
                Gachibowli, Hyderabad - 500032
              </p>
              <Link href={"#"}>View Map</Link>
            </div>
            <div>
              <nav>
                <ul className="flex gap-6 py-4">
                  <li>
                    <FlipLink href="#">linkedin</FlipLink>
                  </li>
                  <li>
                    <FlipLink href="#">instagram</FlipLink>
                  </li>
                  <li>
                    <FlipLink href="#">facebook</FlipLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Center>
    </footer>
  );
}
