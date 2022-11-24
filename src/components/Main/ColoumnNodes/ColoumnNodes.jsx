import '../Main.css';

export const ColoumnNodes = ({nodes}) => {

    return (
        <div className='coloumn'>
            <div className='rowHeader'>Ноды</div>
            <div className='rowContent nodeContent'>
                <div className='coloumnNode'>

                </div>
                <div>

                </div>
                <div>
                    утилизация
                </div>
                {/*{*/}
                {/*  nodes.map( n => {*/}
                {/*      let color = n.node_status_color*/}
                {/*      return <div>*/}
                {/*          <div style={{backgroundColor: color, heigth: '30px', width: '100px'}}>*/}
                {/*              {n.node_status_description}*/}
                {/*          </div>*/}
                {/*      </div>*/}
                {/*  })*/}
                {/*}*/}
            </div>
        </div>
    );
};