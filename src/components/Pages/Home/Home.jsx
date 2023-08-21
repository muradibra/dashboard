import React from 'react'
import { Row } from 'reactstrap'
import CardBg from '../../Lib/CardBg'
import LineChart from '../../Lib/LineChart'

function Home() {
  return (
    <div className='home '>
      <div className='py-2'>
        <Row>
          <div className="col-md-7 ">
            <CardBg>
              <h5>Today's Sales</h5>
            </CardBg>
          </div>
          <div className="col-md-5">
            <CardBg>
              <h5>Visitor Insights</h5>
            </CardBg>
          </div>
        </Row>
      </div>

      <div className='py-2'>
        <Row>
          <div className="col-md-5 ">
            <CardBg>
              <h5>Total Revenue</h5>
              <LineChart />
            </CardBg>
          </div>

          <div className="col-md-4">

          </div>

          <div className="col-md-3">

          </div>
        </Row>
      </div>

    </div>
  )
}

export default Home