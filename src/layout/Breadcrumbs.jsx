import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function MyBreadcrumbs() {

    const [pathArray, setPathArray] = React.useState([])

    const location = useLocation()

    React.useEffect(() => {

        function pathArrayGen() {
            const tempPath = location.pathname?.split("/")
            const tempPathArray = []
            console.log("tempPath :", tempPath)
            const tempLastPath = tempPath?.reduce((accum, element, index) => {
                console.log("incoming accum", accum)


                if (index === 0) {
                    console.log("I'm inside index 0; the type is ", typeof (accum))
                    tempPathArray.push(accum)
                    return accum
                } else if (index === 1) {
                    console.log("i'm inside index 1")
                    return accum + element
                } else {
                    tempPathArray.push(accum)

                    return accum + "/" + element
                }

            }, "/")
            console.log("i'm inside pathArrayGenerator", [...tempPathArray, tempLastPath])

            return [...tempPathArray, tempLastPath]
        }

        const tempPathArray2 = pathArrayGen()
        console.log("i'm outside and tempPathArray2", tempPathArray2)
        setPathArray((prevState) => {
            console.log("I'm outside and inside state", [...prevState, ...tempPathArray2])
            return [...prevState, ...tempPathArray2]
        })

        return () => setPathArray([])
    }, [location.pathname])



    return (
        <Breadcrumbs aria-label="breadcrumb">
            {pathArray?.map((path, index) => {
                console.log("type of icoming index", path)
                if (index === 0) {
                    return (
                        <>
                            <li>
                                <Link key={path} to={path}><HomeIcon />Home</Link>
                            </li>
                            <li>
                                {">"}
                            </li>
                        </>

                    )
                } else if (index === (pathArray.length - 1)) {
                    return (
                        <li>
                            <Link key={path} to={path}>{path.split("/")[index]}</Link>
                        </li>
                    )
                }
                else {
                    return (
                        <>
                            <li>
                                <Link key={path} to={path}>{path.split("/")[index]}</Link>
                            </li>
                            <li>
                                {">"}
                            </li>
                        </>
                    )
                }
            })}
        </Breadcrumbs>
    );
}

const Breadcrumbs = styled.ul`
    list-style-type: none;
    display: inline-flex;
    align-items: center;
    background-color: #8080806e;
    border-radius: 5px;

    li{
        margin-left: 0.5rem;
    }

    a{
        text-decoration: none;
        color: black;

        &:hover{
            background-color: #ff00008f;
            color: white;
            border-radius:7px;
            
        }
    }

`