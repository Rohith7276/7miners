import React from 'react'
const { useState } = React;
const products = [
    {
        id: 1,
        name: 'Bitaxe Gamma 601',
        price: 25960.00,
        image: 'https://7miners.in/cdn/shop/files/800-800-max-1.png?v=1742201216&width=713',
        description: 'The Bitaxe Gamma 601 is a high-performance product designed for efficiency and reliability.', 
    }, 
]
const collections = () => {
    const [filter, setFilter] = useState('Availability');
    const [items, setItems] = useState(products)
    const [sort, setSort] = useState('Alphabetically, A-Z');
    const handleSort = (e)=>{
        setSort(e)
        console.log('e', e)
        if(e == "title-asceding"){
            let x = [...products].sort((a, b) => a.name.localeCompare(b.name))
            setItems(x)
            console.log('x', x)
        }
        if(e == "title-descending"){
            let x = [...products].sort((a, b) => b.name.localeCompare(a.name))
            setItems(x)
            console.log('x', x)
        }
        if(e == "price-ascending"){
            let x = [...products].sort((a, b) => a.price - b.price)
            setItems(x)
            console.log('x', x)
        }
        if(e == "price-descending"){
            let x = [...products].sort((a, b) => b.price - a.price)
            setItems(x)
            console.log('x', x)
        }
        if(e == "created-ascending"){
            let x = [...products].sort((a, b) => a.id - b.id)
            setItems(x)
            console.log('x', x)
        }
        if(e == "created-descending"){
            let x = [...products].sort((a, b) => b.id - a.id)
            setItems(x)
            console.log('x', x)
        }
        if(e == "best-selling"){
            let x = [...products].sort((a, b) => b.price - a.price)
            setItems(x)
            console.log('x', x)
        } 
        if(e == "featured"){
            let x = [...products].sort((a, b) => a.id - b.id)
            setItems(x)
            console.log('x', x)
        }
        if(e == "availability"){
            let x = [...products].sort((a, b) => a.id - b.id)
            setItems(x)
            console.log('x', x)
        }
        if(e == "best-selling"){
            let x = [...products].sort((a, b) => b.price - a.price)
            setItems(x)
            console.log('x', x)
        }
       

    }
    return (
        <div className="px-4 py-8 mt-24 text-[0.88rem] text-gray-700 mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold mb-8">Products</h1>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div>
                        <span className="font-semibold">Filter:</span>
                        <select
                            className="border md:ml-3 border-gray-300 rounded px-2 py-1 w-full md:w-auto"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option>Availability</option>
                        </select>
                    </div>
                    <div className='flex gap-4 md:items-center md:flex-row flex-col' >
                        <span className="font-semibold ">Price Range:</span>
                        <div className="flex space-x-2">
                            <input
                                type="number"
                                placeholder="Min"
                                className="border border-gray-300 rounded px-2 py-1 w-full md:w-auto"
                                onChange={(e) => {
                                    const min = Number(e.target.value);
                                    setItems(products.filter(product => product.price >= min));
                                }}
                            />
                            <input
                                type="number"
                                placeholder="Max"
                                className="border border-gray-300 rounded px-2 py-1 w-full md:w-auto"
                                onChange={(e) => {
                                    const max = Number(e.target.value);
                                    setItems(products.filter(product => product.price <= max));
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-2">
                    <span className="font-semibold">Sort by:</span>
                    <select
                        className="border border-gray-300 rounded px-2 py-1 w-full md:w-auto"
                        value={sort}
                        onChange={(e) => handleSort(e.target.value)}
                    >
                        <option value="manual"> Featured </option>
                        <option value="best-selling"> Best selling </option>
                        <option value="title-asceding" selected="selected"> Alphabetically, A-Z </option>
                        <option value="title-descending"> Alphabetically, Z-A </option>
                        <option value="price-ascending"> Price, low to high </option>
                        <option value="price-descending"> Price, high to low </option>
                        <option value="created-ascending"> Date, old to new </option>
                        <option value="created-descending"> Date, new to old </option>
                    </select>
                    <span>{items.length} product(s)</span>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((product) => (
                    <div key={product.id} className="flex flex-col items-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="mb-4"
                            width="300"
                            height="400"
                        />
                        <h2 className="text-lg font-semibold text-center">{product.name}</h2>
                        <p className="text-gray-600 text-center">Rs. {Number(product.price).toLocaleString('en-IN')}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default collections
