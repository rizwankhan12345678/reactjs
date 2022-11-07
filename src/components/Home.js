import '../assets/home.css';
import * as React from 'react';
import { useEffect } from 'react';
import { getProductsThunk } from '../thunk';
import { useSelector, useDispatch } from 'react-redux';
import Loader from './shared/Loader';

function Home(props) {
    const stateVal = useSelector(state => state.home);
    const { products, isLoading } = stateVal;
    const dispatch = useDispatch();
    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts(force = false) {
        if (!products.length || force) {
            console.log('products', products)
            const resultAction = await dispatch(getProductsThunk());
            if (!getProductsThunk.fulfilled.match(resultAction)) {
                console.log('fetchActiveContestDataerr', resultAction.payload)
            }
        }
    }
    function splitStr(str) {
        const newStr = str.split(/\W+/);
        return removeStr(newStr[0], 10);
    }
    function removeStr(str, num) {
        return str.substring(0, num);
    }
    return (
        <>
            <div className='home-main'>
                <div className="container">
                    <Loader
                        isLoading={isLoading}
                        color={"#ffffff"}
                        styles={{position: 'absolute', top: '50%'}}
                    />
                    {products.map(item => {
                        console.log('main called')
                        return (
                            <div className="card" key={item.id}>
                                <div className="box">
                                <div className="content">
                                    <h2>{item.id}</h2>
                                    <h3>{splitStr(item.title)}</h3>
                                    <p>{removeStr(item.description, 100)}</p>
                                    <a href={item.image} rel="noreferrer" className='btn btn-primary' target="_blank">Read More</a>
                                </div>
                                </div>
                            </div>
                        )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home;