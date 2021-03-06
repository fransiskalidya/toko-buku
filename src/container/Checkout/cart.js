import { disableNetwork } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, fs } from '../../firebase.config';
import { getDocs,updateDoc, deleteDoc } from 'firebase/firestore';
import firebase from "../../firebase.config";
import { useHistory } from 'react-router-dom';
import Navbar from "../../components/frontend/auth/Navbar";
import { getAuth} from 'firebase/auth';

function Cart(props) {
    const auth = getAuth();
    useEffect(() => {
        // forcing user to signup
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/logincustomer');
            }
        })
    })
    useEffect(() => {
        db.collection("cart")
            .onSnapshot((querySnapshot) => {
                var p = [];
                querySnapshot.forEach((doc) => {
                    p.push(doc.data());
                    buku.map((i) => {
                        if (i.id == doc.data().id) {
                            i.cart = true
                        }
                    })
                });

                setCart(p)
            });

    }, []);
    const [cart, setCart] = useState([])
    const [buku, setBuku] = useState([]);
    const bukuCollectionRef = db.collection('buku');
    const cartCollectionRef = firebase.firestore().collection('cart');
    const history = useHistory();

    useEffect(() => {
        const getCart = async () => {
            const data = await getDocs(cartCollectionRef);
            setBuku(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getCart();
    }, []);



    function addtocart(item) {
        cart.map((i) => {
            if (i.id == item.id) {
                i.CheckoutCus = true
            }
        })

        db.collection('CheckoutCus').doc(`${item.id}`).set(item, { merge: true })
        history.push('/CheckoutCus');

    }


    function removetocart(item) {

        buku.map((i) => {
            if (i.id == item.id) {
                i.cart = false
            }
        })
        db.collection('cart').doc(`${item.id}`).delete()

    }

    function increase(item) {
        db.collection('cart').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(1))

    }
    function decrease(item) {
        db.collection('cart').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(-1))
    }
    function total() {
        let x = 0
        cart.map((i) => {
            x += ((i.harga) * (i.quantity))

        })
        return x
    }

    return (
        <div>
            <Navbar/>
        <div className='container' style={{marginTop:"100px"}}>
            <div className='row iustify-content-center' >


            </div>

            <div className='row mt-3'>
                <table className="table  text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Buku</th>
                            <th scope="col">Judul</th>
                            <th scope="col">harga</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((i, index) => (

                                < tr key={i.id}>
                                    <th scope="row">{index + 1}</th>
                                    <th scope="row">
                                        <img src={i.gambar} style={{ width: '4rem' }} />
                                    </th>
                                    <td>{i.judul}</td>
                                    <td>
                                        {i.harga}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => decrease(i)}
                                            className="btn btn-primary btn-sm"
                                        >
                                            -
                                        </button>
                                        {i.quantity}
                                        <button
                                            onClick={() => increase(i)}

                                            className="btn btn-primary btn-sm"
                                            size="sm"
                                        >
                                            +
                                        </button>
                                    </td>

                                    <td>
                                        <button onClick={() => removetocart(i)} className="btn btn-danger">
                                            Remove
                                        </button>
                                    </td >
                                    <td>
                                        <button onClick={() => addtocart(i)} className="btn btn-danger">
                                            Checkout
                                        </button>
                                    </td >
                                </tr >
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="row">
                <div className="col text-center">
                    <h4>TOTAL: {total()}</h4>
                </div>
            </div>
        </div >
        </div>

    );
}

export default Cart;
