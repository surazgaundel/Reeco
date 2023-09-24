import {useState} from 'react'
import {AiOutlinePrinter} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs';
export default function Search() {

    return (
    <div className="search-container">
        <form>
            <input 
            type='search'
            placeholder='Search...'
            />
            <button className='search-button'><BsSearch/></button>
        </form>
        <section className='add-print-section'>
            <button className='light-button'>Add Item</button>
            <button><AiOutlinePrinter className='printer-icon'/></button>
        </section>
    </div>
    )
}
