import React from 'react'
import styled from 'styled-components';

const reduxDevelopCardsName = [
    'ДОРОГА',
    'ГОРОД',
]
const reduxResourcesCardsName = [
    'РУДА',
    'ДЕРЕВО',
    'ЗЕРНО',
]


const reduxResourcesCardsName = useSelector(state => state.CardName)

export default function MarketCardsRow() {
    const Container = styled.div`
    padding: 10px 0;
    height: 150px;
    background: #56A0E8;
    color: white;
    display: flex;
    justify-content: space-around;
  `;
    const Card = styled.div`
    height: 150px;
    background: #FFEB5E;
    color: green;
    width: 100px;
    `;
    const ContainerPart = styled.div`
    height: 180px;
    background: #56A0E8;
    color: green;
    width: 50vw;
    display: flex;
    justify-content: space-around;
    `;
    const Title = styled.div`
    color: white;
    font-size: 2rem;
    text-align: center;
    padding: 10px 0;
    `
    return (
        <Container>
            <div>
                <Title>
                    Постройки
                </Title>
                <ContainerPart>
                    {reduxDevelopCardsName.map(name => (
                        <Card>
                            {name}
                        </Card>
                    ))}
                </ContainerPart>
            </div>
            <div>
                <Title>
                    Ресурсы
                </Title>
                <ContainerPart>
                    {reduxResourcesCardsName.map(name => (
                        <Card>
                            {name}
                        </Card>
                    ))}
                </ContainerPart>
            </div>
        </Container>
    )
}
