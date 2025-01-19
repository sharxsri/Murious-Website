import { companyLogos } from "../constants";
import Heading from "./Heading";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <Heading className="md:max-w-md lg:max-w-2xl" title="Sponsors" />
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
