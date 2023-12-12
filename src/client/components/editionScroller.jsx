import { useEffect, useState, useRef } from "react";
import supabase from "../../supabase";
import "../components/styles/editionScroller.css";

function EditionScroller() {
  const [editions, setEditions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeEdition, setActiveEdition] = useState(null);

  //useEffect to grab latest list of editions from DB on mount
  useEffect(() => {
    async function getEditions() {
      const { data, error } = await supabase.from("edition").select();
      setEditions(data);
    }
    getEditions();
  }, []);
  console.log("editions", editions);

  //UseEffect to manage the arrows appearing
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        setShowLeftArrow(container.scrollLeft > 0);
        setShowRightArrow(
          container.scrollLeft < container.scrollWidth - container.clientWidth
        );
      }
    };

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  console.log("active Edition", activeEdition);

  return (
    <div className="editionScrollContainer">
      {showLeftArrow && (
        <div className="leftArrow" onClick={() => handleScroll(-100)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      )}
      <ul ref={scrollContainerRef}>
        {editions.map((editions, index) => (
          <li
            key={editions.edition_id}
            className={index === activeIndex ? "active" : ""}
            onClick={() => {
              setActiveIndex(index);
              setActiveEdition(editions.edition_id);
            }}
          >
            {editions.month}
          </li>
        ))}
      </ul>
      {showRightArrow && (
        <div className="rightArrow" onClick={() => handleScroll(100)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default EditionScroller;

document.querySelectorAll;
