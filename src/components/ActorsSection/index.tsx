import { ReactElement } from 'react';
import './style.sass'
import { Circles } from 'react-loader-spinner';
import ActorList from './ActorList';

const Actors = ({actors}: any): ReactElement => {
    return <section className='actors' id='actors'>
        <div className="wrapper actors_content">
            <h3 className="actors_title">АКТЕРЫ</h3>
            <div className="actors_container">
                <p className="actors_subtext">Надежные и опытные актеры - залог вашего успеха.</p>
                {actors && actors.length ? 
                    <ActorList actors={actors} /> : 
                    <Circles
                        height="80"
                        width="80"
                        color="#ffcc00"
                        ariaLabel="circles-loading"
                        wrapperClass="actors_loader"
                        visible={true}
                    />
                }
            </div>
        </div>
    </section>
};

export default Actors;