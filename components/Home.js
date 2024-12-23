import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSith } from '@fortawesome/free-brands-svg-icons';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { searchAPI } from '../functions/searchAPI';
import Card from './Card';
import Form from './Form';


function Home() {

  const [dark , setDark] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async (searchText) => {
    const result = await searchAPI(searchText);
    setSearchResult(result);
  };

  const cards = searchResult.map((data, i) => {
    return <Card key={i} infos={data} />;
  });

  const handleChangeDark = ()=>{
    setDark(!dark)
    // document.body.classList.toggle("dark")
    dark ? document.body.classList.add('dark') : document.body.classList.remove('dark')
  }

  return (
    <div id="main" className="py-0 px-5 bg-left-top bg-right-top bg-no-repeat bg-cover w-screen min-h-screen relative bg-light dark:bg-dark flex flex-col justify-center items-center transition-all">
      {/* TOGGLE THEME BUTTON */}
      <div className="rounded-full cursor-pointer border-none absolute top-6 right-6 w-[50px] h-[50px] bg-neutral-500">
        <button onClick={()=>handleChangeDark()} className="flex justify-center items-center w-full h-full rounded-full -translate-y-[6px] active:-translate-y-[2px] bg-neutral-800 dark:bg-neutral-200">
          {dark
            ? <FontAwesomeIcon icon={faSith} className="text-2xl text-neutral-200" />
            : <FontAwesomeIcon icon={faJedi} className="text-2xl text-neutral-800" />}
        </button>
      </div>

      {/* TITLE */}
      <h1 className="text-6xl m-10 text-neutral-80 font-starjedi dark:text-neutral-200" >THEME WARS</h1>

      {/* SEARCH */}
      <Form handleSearch={handleSearch} />

      {/* CARDS */}
      <div className="w-2/5 flex flex-col items-center">
        {cards}
      </div>
    </div>
  );
}

export default Home;
