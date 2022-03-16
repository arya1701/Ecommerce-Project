import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Searchbar.css"
// const useStyle = makeStyles({

//     search: {
//         borderRadius: 2,
//         marginLeft: 50,
//         width: 300,
//         backgroundColor: '#fff',
//         display: 'flex'
//       },
//       inputroot:{
//           width:'100%',
//           padding:10,
//           fontSize: 14,
//           outline:'none'
//       },
//       searchIcon: {
//         marginLeft: 'auto',
//         padding: 5,
//         display: 'flex',
//         color: '#0F4C75'
//       },
//   });

const Searchbar = () => {

    // const classes = useStyle();
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(keyword.trim()){
            navigate(`/products/${keyword}`)
        } else {
            navigate('/products');
        }
    }

    return (
        <div >
        <form className="search" onSubmit={handleSubmit}>
            <input className="inputroot" value={keyword} onChange={(e) => setKeyword(e.target.value)}  type="text" placeholder="Search for products, brands and more" />
            <button type="submit" className="searchIcon"><SearchIcon /></button>
        </form>
        </div>
    );
};

export default Searchbar;