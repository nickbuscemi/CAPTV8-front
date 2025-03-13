import Link from "next/link";
//import LogoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.png";
//import LogoBlack from "../../../public/assets/imgs/logo/logo-black.png";
import captv8_transparent_light from "../../../public/assets/logos/captv8_transparent_light.png";
import captv8_transparent_dark from "../../../public/assets/logos/captv8_transparent_dark.png";
import captv8_transparent_alt_light from "../../../public/assets/logos/captv8_transparent_alt_light.png";
import captv8_transparent_alt_dark from "../../../public/assets/logos/captv8_transparent_alt_dark.png";
import Image from "next/image";

export default function LogoItem() {
  return (
    <>
      <div className="header__logo-2">
        <Link href={"/digital-marketing"} className="logo-dark">
          <Image
            priority
            width={80}
            height={48}
            src={captv8_transparent_alt_dark}
            alt="Site Logo"
          />
        </Link>
        <Link href={"/digital-marketing"} className="logo-light">
          <Image
            priority
            width={80}
            height={48}
            src={captv8_transparent_alt_light}
            alt="Site Logo"
          />
        </Link>
      </div>
    </>
  );
}
