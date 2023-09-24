import {useState} from 'react'
import {AiOutlinePrinter} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs';
import AddItem from './AddItem';
export default function Search() {
    const [searchValue,setSearchValue]=useState('');
    const [addModal,setAddModal]=useState(false)

    const handleAddModal=()=>{
        setAddModal(prev=>!prev);
    }

    // search value
    const handleChange=(e)=>{
        setSearchValue(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(searchValue);
        setSearchValue('');
    }


    return (
    <div className="search-container">
        <form onSubmit={handleSubmit}>
            <input 
            type='search'
            placeholder='Search...'
            value={searchValue}
            onChange={handleChange}
            required
            />
            <button type='submit'className='search-button'><BsSearch/></button>
        </form>
        <section className='add-print-section'>
            <button className='light-button' onClick={handleAddModal}>Add Item</button>
            <button><AiOutlinePrinter className='printer-icon'/></button>
        </section>
        <AddItem addModal={addModal} handleAddModal={handleAddModal}/>
    </div>
    )
}
