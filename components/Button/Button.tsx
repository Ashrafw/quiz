type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => (
  <button onClick={onClick} className="py-2 px-10 m-5 text-white border-white  bg-[#B24C48] rounded-md">
    {text}
  </button>
);

export default Button;
