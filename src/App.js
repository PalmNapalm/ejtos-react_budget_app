import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import Currency from './components/Currency';
import AllocationForm from './components/AllocationForm';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        <div className='row'>
                            <div className='col'>
                                {
                                    <Budget />
                                    /* Add Budget component here */
                                }        
                            </div>
                            <div className='col'>
                            {
                            <Remaining />
                                /* Add Remaining component here*/
                            }        
                            </div>
                            <div className='col'>
                            {
                            <ExpenseTotal />
                                /* Add ExpenseTotal component here */
                            }       
                            </div>
                            <div className='col'>
                            {
                                <Currency />
                            }       
                            </div>
                        </div>
                        {
                        <ExpenseList />
                            /* Add ExpenseList component here */
                        }         
                        {
                        <AllocationForm />
                            /* Add AllocationForm component here under */
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
