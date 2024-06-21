import { FaMobileScreenButton } from "react-icons/fa6";
import { HiComputerDesktop } from "react-icons/hi2";
import { GiPoloShirt } from "react-icons/gi";
import { FaCarAlt } from "react-icons/fa";

const icones = [
    {
        title: "Smartphones",
        icone: <FaMobileScreenButton size={48} />,

    },
    {
        title: "Computadores",
        icone: <HiComputerDesktop size={48} />,

    },
    {
        title: "Vestuário",
        icone: <GiPoloShirt size={48} />,

    },
    {
        title: "Veículos",
        icone: <FaCarAlt size={48} />

    },
]

export default icones;