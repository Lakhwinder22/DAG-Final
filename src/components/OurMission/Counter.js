import React, { useState } from 'react';
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { useMediaQuery } from 'react-responsive';

function Counter({ className, ...rest }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <section className={`counter ${className}`}>
        <div className="Mission">
          <h1>OUR MISSION,</h1>
          <h1>YOUR SUCCESSFUL ADMISSION.</h1>
        </div>
        <div className="counter-row">
          <div className="counter-column">
            <strong data-number="321">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={321}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span>{isMobile ? 'Colleges' : 'College Tie-ups'}</span>
          </div>

          <div className="counter-column">
            <strong data-number="1028">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={1028}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span>{isMobile ? 'Courses' : 'Courses offered'}</span>
          </div>

          <div className="counter-column">
            <strong data-number="2478">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={2478}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span>{isMobile ? 'Admissions' : 'Admissions'}</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Counter;
