import { useState } from "react";

export default function Component() {
  const [openIndex, setOpenIndex] = useState(-1); // Initial value -1 to indicate all closed

  const faqs = [
    {
      question: "What is essence?",
      answer:
        "In Thomistic philosophy, essence refers to the fundamental nature of a thing that makes it what it is. It's the unchanging core that distinguishes one type of being from another.",
    },
    {
      question: "What is existence?",
      answer:
        "Existence is the act of being. While essence defines what something is, existence determines whether something actually is. According to Aquinas, essence is incomplete without existence.",
    },
    {
      question: "What are the Five Ways?",
      answer:
        "The Five Ways are arguments for the existence of God proposed by Thomas Aquinas. They reason from aspects of the observable world (unmoved mover, first cause, contingent beings, degrees of perfection, and final cause) to the necessity of a supreme being.",
    },
    {
      question: "How does natural law work?",
      answer:
        "Natural law, according to Aquinas, is the participation of the eternal law (God's plan) in human reason. It guides us towards good and away from evil, providing a universal moral code accessible through reason.",
    },
    {
      question: "What is the role of faith and reason?",
      answer:
        "Aquinas believed faith and reason are compatible. While reason helps us understand the natural world, faith is needed for truths beyond human comprehension (e.g., the Trinity). They work together to guide us towards knowledge and truth.",
    },
    {
      question: "Where can I learn more about Thomistic philosophy?",
      answer:
        "There are many resources available! You can explore books by Aquinas himself (Summa Theologica), secondary sources on Thomism, or online resources from universities and philosophy websites.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#010101] text-white">
      <div className="text-center mb-8">
        <img
          src="/assets/boxlogo.svg" // Path to your book SVG file (optional)
          alt="Book Icon"
          className="w-8 h-8 mx-auto mb-2"
        />
        <h1 className="text-3xl font-semibold">Thomistic FAQs</h1>
        <h2 className="text-2xl font-light">Exploring Aquinas' Teachings</h2>
      </div>

      <div className="space-y-4 w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md transition-shadow duration-200 ease-in-out ${openIndex === index ? "bg-[#0d0d0d] border border-[#060606]" : "bg-[#010101] border border-[#010101]"
              }`}
            onClick={() => handleToggle(index)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <CloseIcon className="w-5 h-5 cursor-pointer" onClick={() => handleToggle(index)} />
              ) : (
                <PlusIcon className="w-5 h-5 cursor-pointer" />
              )}
            </div>
            {openIndex === index && <p className="mt-2 text-gray-400">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <div className="mt-8 text-gray-400">
        Still have more questions? Contact our{" "}
        <a href="#" className="text-blue-400 underline">
          help center
        </a>
        .
      </div>
    </div>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function CloseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

