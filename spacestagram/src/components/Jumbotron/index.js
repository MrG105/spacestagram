import React from "react";
import styled from 'styled-components'

const Styles = styled.div``;

export const Jumbotron = () => (
    <Styles>
        <div class="container-fluid bg-light text-dark p-5">
        <div class="container bg-light p-5">
            <h1 class="display-4 fw-bold">Welcome to Spacestagram</h1>
             <hr />
            <p>Browse the latest and greatest images directly from NASA's Astronomy Picture of the Day</p>
        </div>
        </div>
    </Styles>

)