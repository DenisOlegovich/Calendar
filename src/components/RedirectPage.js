import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import { Container } from "@chakra-ui/react";


const RedirectPage = ({path}) => {
    let [count, setCount] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        let timer

        if(count !== 0) {
            timer = setTimeout(() => {
                setCount(count => count - 1);
            }, 1000);
        } else {
            navigate(path);
        }

        return () => {
            clearTimeout(timer);
        }
    }, [count])

    return (
        <Container fontSize="2xs" centerContent>
            <p>Упс, это 404</p>
            <p>Такой страницы не существует</p>
            <p>Перенаправление произойдет через {count}</p>
        </Container>
    )
}

export default RedirectPage;