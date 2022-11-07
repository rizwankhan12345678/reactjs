import '../assets/paginate-list.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Loader from './shared/Loader';
import { getPaginateList } from '../thunk';
import { handlePageUpdate } from '../slices/home';
import Pagination from './shared/Pagination';
import Collapsible from 'react-collapsible';
import ErrorMassage from './shared/ErrorMassage';

function PaginateList() {
    const stateVal = useSelector(state => state.home);
    const { list, listCount, isLoading, listCurrentPage } = stateVal;
    const [showError, setShowError] = useState(false);
    const [errorMassage, setErrorMassage] = useState('');
    const dispatch = useDispatch();
    let page = 0;
    useEffect(() => {
        getList();
    }, []);

    async function getList(force = false) {
        if (!list.length || force) {
            const params = {
                page: page,
                size: 10
            }
            const resultAction = await dispatch(getPaginateList(params));
            if (!getPaginateList.fulfilled.match(resultAction)) {
                console.log('getPaginateList', resultAction.error)
                setErrorMassage(resultAction.error.message);
                setShowError(true);
                setTimeout(() => {
                    setShowError(false)
                }, 3000);
            }
        }
    }

    function handlePageClick(event) {
        page = event.selected;
        dispatch(handlePageUpdate(event.selected))
        getList(true);
    }

    return (
        <div className="main-list">
            { showError &&
                <ErrorMassage
                errorMassage={errorMassage}
                />
            }
            <section className="list-class">
                <Loader
                    isLoading={isLoading}
                    color="black"
                    styles={{position: 'absolute', left: '45%'}}
                />
                <ol className="gradient-list">
                    {list.map(item => {
                        return (
                            <li
                                style={{ cursor: 'pointer' }}
                                key={item._id}
                            >
                            <Collapsible trigger={item.airline ? item.airline[0].slogan : item.name}>
                                <p>
                                    This is the collapsible content. It can be any element or React
                                    component you like.
                                </p>
                                <p>
                                    It can even be another Collapsible component. Check out the next
                                    section!
                                </p>
                            </Collapsible>
                                
                            </li>                    
                        )
                      })
                    }
                </ol>
                { listCount > 0 &&
                    <Pagination
                        range={5}
                        handlePageClick={handlePageClick}
                        pageCount={listCount}
                        currentPage={listCurrentPage}
                    />
                }
            </section>
        </div>
    )
};

export default PaginateList;