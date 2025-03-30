import React, { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import axios from 'axios';
import RazorPay from '../components/RazorPay';

const Checkout = () => {
    const [contact, setContact] = useState('');
    const [emailOffers, setEmailOffers] = useState(false);
    const [country, setCountry] = useState('India');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [apartment, setApartment] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('Karnataka');
    const [pinCode, setPinCode] = useState('');
    const [saveInfo, setSaveInfo] = useState(false);
    const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
    const { cartQuantity } = useCartStore()
    const [billingCountry, setBillingCountry] = useState('India');
    const [billingFirstName, setBillingFirstName] = useState('');
    const [billingLastName, setBillingLastName] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [billingApartment, setBillingApartment] = useState('');
    const [billingCity, setBillingCity] = useState('');
    const [billingState, setBillingState] = useState('Karnataka');
    const [billingPinCode, setBillingPinCode] = useState('');
    const [handlePayment, setHandlePayment] = useState(false)


    const handleCompleteOrder = () => {
        // Handle order completion logic here
        
        if (!contact || !lastName || !address || !city || !pinCode) {
            alert('Please fill in all required fields.');
            return;
        } 
        let shippingAddress = {
            contact, 
            country,
            firstName,
            lastName,
            address,
            apartment,
            city,
            state,
            pinCode, 
        }
        
        let details;
        if (!billingSameAsShipping) {
            let userBillingAddress = {
                billingCountry,
                billingFirstName,
                billingLastName,
                billingAddress,
                billingApartment,
                billingCity,
                billingState,
                billingPinCode
            }
            details = {shippingAddress, userBillingAddress}
        }
        else details = {shippingAddress, userBillingAddress: shippingAddress}
        if (saveInfo) {
            localStorage.setItem('shippingAddress', shippingAddress)
            if (!billingSameAsShipping){
                let userBillingAddress = {
                    billingCountry,
                    billingFirstName,
                    billingLastName,
                    billingAddress,
                    billingApartment,
                    billingCity,
                    billingState,
                    billingPinCode
                }
                localStorage.setItem('userBillingAddress', userBillingAddress)
            }
            else localStorage.setItem('userBillingAddress', shippingAddress)
        }
        console.log('details: ', details);
        setHandlePayment(true)
        // window.location.href = '/';
    }

    return (
        <div className="w-screen mx-auto px-4 md:px-0 md:pl-8">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="pt-10 md:pt-28 bg-white w-full md:w-[60vw] p-6 md:pr-24 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Contact</h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 text-sm rounded"
                            placeholder="Email or mobile phone number"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                        <div className="flex items-center mt-2">
                            <input
                                type="checkbox"
                                className="mr-3"
                                checked={emailOffers}
                                onChange={() => setEmailOffers(!emailOffers)}
                            />
                            <label className="text-[0.7rem] text-gray-700">Email me with news and offers</label>
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold mb-4">Delivery</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Country/Region</label>
                        <select
                            className="w-full p-2 border border-gray-300 text-sm rounded"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option>India</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First name (optional)</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 text-sm rounded"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last name</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 text-sm rounded"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 text-sm rounded"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Apartment, suite, etc. (optional)</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 text-sm rounded"
                            value={apartment}
                            onChange={(e) => setApartment(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">City</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 text-sm rounded"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">State</label>
                            <select
                                className="w-full p-2 border border-gray-300 text-sm rounded"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            >
                                <option>Karnataka</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">PIN code</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 text-sm rounded"
                                value={pinCode}
                                onChange={(e) => setPinCode(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={saveInfo}
                            onChange={() => setSaveInfo(!saveInfo)}
                        />
                        <label className="text-[0.7rem] text-gray-700">Save this information for next time</label>
                    </div>
                    <h2 className="text-xl font-semibold mb-4">Shipping method</h2>
                    <div className="p-4 border text-[0.7rem] border-gray-300 rounded bg-gray-100 text-center">
                        Enter your shipping address to view available shipping methods.
                    </div>
                    <h2 className="text-xl font-semibold mt-6 mb-4">Payment</h2>
                    <p className="text-[0.7rem] text-gray-700 mb-4">All transactions are secure and encrypted.</p>
                    <div className="p-4 border border-blue-500 rounded mb-4">
                        <p className="font-semibold mb-2">Payments only processed through UPI or Cash</p>
                        <p className="text-lg text-gray-600 mb-2">
                            Please get in touch with us at +91 7760699382 so we can confirm the stock and provide payment options. You are allowed to pay through UPI or Cash.
                        </p>
                        <p className="text-lg text-gray-600">
                            For Bangalore customers only: You can also collect product directly at Bangalore Store.
                        </p>
                    </div>
                    <h2 className="text-xl font-semibold mb-4">Billing address</h2>
                    <div className="p-4 border border-blue-500 rounded mb-4">
                        <div className="flex items-center mb-2">
                            <input
                                type="radio"
                                className="mr-2"
                                checked={billingSameAsShipping}
                                onChange={() => setBillingSameAsShipping(true)}
                            />
                            <label className="text-sm">Same as shipping address</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                className="mr-2"
                                checked={!billingSameAsShipping}
                                onChange={() => setBillingSameAsShipping(false)}
                            />
                            <label className="text-sm">Use a different billing address</label>
                        </div>
                        {!billingSameAsShipping && (
                            <div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Country/Region</label>
                                    <select
                                        className="w-full p-2 border border-gray-300 text-sm rounded"
                                        value={country}
                                        onChange={(e) => setBillingCountry(e.target.value)}
                                    >
                                        <option>India</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">First name (optional)</label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border border-gray-300 text-sm rounded"
                                            value={billingFirstName}
                                            onChange={(e) => setBillingFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Last name</label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border border-gray-300 text-sm rounded"
                                            value={billingLastName}
                                            onChange={(e) => setBillingLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Address</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 text-sm rounded"
                                        value={billingAddress}
                                        onChange={(e) => setBillingAddress(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Apartment, suite, etc. (optional)</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 text-sm rounded"
                                        value={billingApartment}
                                        onChange={(e) => setBillingApartment(e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">City</label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border border-gray-300 text-sm rounded"
                                            value={billingCity}
                                            onChange={(e) => setBillingCity(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">State</label>
                                        <select
                                            className="w-full p-2 border border-gray-300 text-sm rounded"
                                            value={billingState}
                                            onChange={(e) => setBillingState(e.target.value)}
                                        >
                                            <option>Karnataka</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">PIN code</label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border border-gray-300 text-sm rounded"
                                            value={billingPinCode}
                                            onChange={(e) => setBillingPinCode(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={handleCompleteOrder}>Complete order</button>
                </div>
                <div className="bg-gray-200 pt-10 md:pt-28 w-full md:w-[40vw] p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <img
                            src="https://7miners.in/cdn/shop/files/800-800-max-1.png?v=1742201216&width=713"
                            alt="Product image of Bitaxe Gamma 601"
                            className="w-16 h-16 rounded-sm mr-4"
                        />
                        <div className="text-[0.4rem] bg-black relative text-white z-50 ml-[-1.4rem] mt-[-3.6rem] rounded-full h-[0.8rem] w-3 flex justify-center items-center">
                            <span>{cartQuantity}</span>
                        </div>
                        <div className="ml-5">
                            <p className="font-semibold">Bitaxe Gamma 601</p>
                            <p className="text-gray-600">₹ {Number(cartQuantity * 25960).toLocaleString('en-IN')}</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 pt-4">
                        <div className="flex justify-between mb-2">
                            <p className="text-[0.7rem] text-gray-600">Subtotal</p>
                            <p className="text-[0.7rem] text-end">  ₹ {Number(cartQuantity * 25960).toLocaleString('en-IN')}</p>
                        </div>
                        <div className="flex justify-between w-full mb-2">
                            <p className="text-[0.7rem] text-gray-600">Shipping</p>
                            <p className="text-[0.7rem] text-end">Enter shipping address</p>
                        </div>
                        <div className="flex justify-between font-semibold text-lg">
                            <p className="text-[0.9rem]">Total</p>
                            <p className="text-[0.9rem]">INR ₹ {Number(cartQuantity * 25960).toLocaleString('en-IN')}</p>
                        </div>
                        <p className="text-gray-600 text-[0.7rem]">Including  Rs.{Number(cartQuantity * 3960.00).toLocaleString('en-IN')} in taxes</p>
                    </div>
                </div>
            </div>
            {handlePayment && <RazorPay />}
        </div>
    );
}
export default Checkout