// import { Chart, CategoryScale } from 'chart.js';
// import { useState } from 'react';
import './home.scss';
import Chartbox from '../../components/Chartbox/Chartbox';
import Tablebox from '../../components/Tablebox/Tablebox';
import BarChart from '../../components/Barchart/Barchart';
import TopList from '../../components/TopList/TopList';



function Home () {

    return (
        <main>
            <div className="first">
                <article className="box box1">
                    <BarChart />
                </article>
                <article className="box box2">
                    <section>
                    <Tablebox />
                    </section>
                </article>
            </div>
            <div className="second">
                <article className="trade">
                    <Chartbox />
                </article>
                <article className="box box7">
                    <TopList />
                </article>
            </div>
        </main>
    )
}

export default Home