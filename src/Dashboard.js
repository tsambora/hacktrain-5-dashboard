import React, { Component } from 'react';
import {
  Box,
  Text,
} from 'grommet';
import {AreaChart, Area, Tooltip} from 'recharts';
import { CaretUp, CaretDown } from 'grommet-icons';
import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel
} from 'react-accordion-with-header';
import { trainsWithProblem, trainsWithoutProblem } from './database';

const carriagesData = (data) => (
  <div style={{justifyContent: 'center', display: 'flex', flexDirection:'row', padding: '32px 0 32px', overflow: 'auto'}}>
    <div style={{width: '132px', height: '80px', backgroundColor: '#fff', border: '1px solid #AAAAAA', borderRadius: '56px 0 0 0', margin: '0 8px'}}>
      <AreaChart width={142} height={90} data={data[0]} margin={{top: 10, right: 10, left: 0, bottom: 24}}>
        <Tooltip/>
        <Area isAnimationActive={false} type='monotone' dataKey='hvac' stroke='#70a1ff' fill='#70a1ff' />
        <Area isAnimationActive={false} type='monotone' dataKey='temperature' stroke='#7bed9f' fill='#7bed9f' />
      </AreaChart>
    </div>
    <div style={{width: '132px', height: '80px', backgroundColor: '#fff', border: '1px solid #AAAAAA', margin: '0 8px'}}>
      <AreaChart width={142} height={90} data={data[1]} margin={{top: 10, right: 10, left: 0, bottom: 24}}>
        <Tooltip/>
        <Area isAnimationActive={false} type='monotone' dataKey='hvac' stroke='#70a1ff' fill='#70a1ff' />
        <Area isAnimationActive={false} type='monotone' dataKey='temperature' stroke='#7bed9f' fill='#7bed9f' />
      </AreaChart>
    </div>
    <div style={{width: '132px', height: '80px', backgroundColor: '#fff', border: '1px solid #AAAAAA', margin: '0 8px'}}>
      <AreaChart width={142} height={90} data={data[2]} margin={{top: 10, right: 10, left: 0, bottom: 24}}>
        <Tooltip/>
        <Area isAnimationActive={false} type='monotone' dataKey='hvac' stroke='#70a1ff' fill='#70a1ff' />
        <Area isAnimationActive={false} type='monotone' dataKey='temperature' stroke='#7bed9f' fill='#7bed9f' />
      </AreaChart>
    </div>
    <div style={{width: '132px', height: '80px', backgroundColor: '#fff', border: '1px solid #AAAAAA', margin: '0 8px'}}>
      <AreaChart width={142} height={90} data={data[3]} margin={{top: 10, right: 10, left: 0, bottom: 24}}>
        <Tooltip/>
        <Area isAnimationActive={false} type='monotone' dataKey='hvac' stroke='#70a1ff' fill='#70a1ff' />
        <Area isAnimationActive={false} type='monotone' dataKey='temperature' stroke='#7bed9f' fill='#7bed9f' />
      </AreaChart>
    </div>
    <div style={{width: '132px', height: '80px', backgroundColor: '#fff', border: '1px solid #AAAAAA', margin: '0 8px'}}>
      <AreaChart width={142} height={90} data={data[4]} margin={{top: 10, right: 10, left: 0, bottom: 24}}>
        <Tooltip/>
        <Area isAnimationActive={false} type='monotone' dataKey='hvac' stroke='#70a1ff' fill='#70a1ff' />
        <Area isAnimationActive={false} type='monotone' dataKey='temperature' stroke='#7bed9f' fill='#7bed9f' />
      </AreaChart>
    </div>
    <div style={{width: '132px', height: '80px', backgroundColor: '#fff', border: '1px solid #AAAAAA', margin: '0 8px'}}>
      <AreaChart width={142} height={90} data={data[5]} margin={{top: 10, right: 10, left: 0, bottom: 24}}>
        <Tooltip/>
        <Area isAnimationActive={false} type='monotone' dataKey='hvac' stroke='#70a1ff' fill='#70a1ff' />
        <Area isAnimationActive={false} type='monotone' dataKey='temperature' stroke='#7bed9f' fill='#7bed9f' />
      </AreaChart>
    </div>
    <div style={{width: '132px', height: '80px', backgroundColor: '#fff', border: '1px solid #AAAAAA', margin: '0 8px'}}>
      <AreaChart width={142} height={90} data={data[6]} margin={{top: 10, right: 10, left: 0, bottom: 24}}>
        <Tooltip/>
        <Area isAnimationActive={false} type='monotone' dataKey='hvac' stroke='#70a1ff' fill='#70a1ff' />
        <Area isAnimationActive={false} type='monotone' dataKey='temperature' stroke='#7bed9f' fill='#7bed9f' />
      </AreaChart>
    </div>
    <div style={{width: '132px', height: '80px', backgroundColor: '#fff', border: '1px solid #AAAAAA', borderRadius: '0 56px 0 0', margin: '0 8px'}}>
      <AreaChart width={142} height={90} data={data[7]} margin={{top: 10, right: 10, left: 0, bottom: 24}}>
        <Tooltip/>
        <Area isAnimationActive={false} type='monotone' dataKey='hvac' stroke='#70a1ff' fill='#70a1ff' />
        <Area isAnimationActive={false} type='monotone' dataKey='temperature' stroke='#7bed9f' fill='#7bed9f' />
      </AreaChart>
    </div>
  </div>
)

export default class Dashboard extends Component {
  state = {
    accordionStatesProblem: null,
    accordionStatesNormal: null,
    activeIndexNormal: []
  }

  actionCallbackProblem = (panels) => {
    this.setState({accordionStatesProblem: panels});
  }

  actionCallbackNormal = (panels) => {
    this.setState({accordionStatesNormal: panels});
  }

  render() {
    const { accordionStatesProblem, accordionStatesNormal } = this.state;
    return (
      <div>
        <Box margin='medium'>
          <Text style={{marginBottom: '8px'}}>Trains with problem (2)</Text>
          <Box background="light-1" elevation='xsmall'>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                <Text>Class</Text>
              </div>
              <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                <Text>Time</Text>
              </div>
              <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                <Text>From</Text>
              </div>
              <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                <Text>To</Text>
              </div>
              <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                <Text>Status</Text>
              </div>
              <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
              </div>
            </div>
            <AccordionWithHeader actionCallback={this.actionCallbackProblem}>
              {trainsWithProblem.map((train, i) => (
                <AccordionNode key={i} >
                  <AccordionHeader
                    horizontalAlignment="spaceBetween"
                    verticalAlignment="center">
                    <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                      <Text>{train.class}</Text>
                    </div>
                    <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                      <Text>{train.time}</Text>
                    </div>
                    <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                      <Text>{train.from}</Text>
                    </div>
                    <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                      <Text>{train.to}</Text>
                    </div>
                    <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                      <Text style={{color: train.status === 'Normal' ? '#7bed9f' : 'orange'}}>{train.status}</Text>
                    </div>
                    <div style={{flex: 1, textAlign: 'center', paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                      {(accordionStatesProblem && accordionStatesProblem.length && accordionStatesProblem[i].open) ? <CaretUp size='small' /> : <CaretDown size='small' />}
                    </div>
                  </AccordionHeader>
                  <AccordionPanel>
                    {carriagesData(train.carriagesData)}
                  </AccordionPanel>
                </AccordionNode>
              ))}
            </AccordionWithHeader>
          </Box>
        </Box>
        <Box margin='medium'>
          <Text style={{marginBottom: '8px'}}>Rolling Stock in Service (350)</Text>
          <Box background="light-1" elevation='xsmall'>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                <Text>Class</Text>
              </div>
              <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                <Text>Time</Text>
              </div>
              <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                <Text>From</Text>
              </div>
              <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                <Text>To</Text>
              </div>
              <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                <Text>Status</Text>
              </div>
              <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
              </div>
            </div>
            <AccordionWithHeader actionCallback={this.actionCallbackNormal}>
              {trainsWithoutProblem.map((train, i) => (
                <AccordionNode key={i} >
                  <AccordionHeader
                    horizontalAlignment="spaceBetween"
                    verticalAlignment="center">
                    <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                      <Text>{train.class}</Text>
                    </div>
                    <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                      <Text>{train.time}</Text>
                    </div>
                    <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                      <Text>{train.from}</Text>
                    </div>
                    <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                      <Text>{train.to}</Text>
                    </div>
                    <div style={{flex: 1, paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                      <Text style={{color: train.status === 'Normal' ? '#7bed9f' : 'orange'}}>{train.status}</Text>
                    </div>
                    <div style={{flex: 1, textAlign: 'center', paddingLeft: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
                      {(accordionStatesNormal && accordionStatesNormal.length && accordionStatesNormal[i].open) ? <CaretUp size='small' /> : <CaretDown size='small' />}
                    </div>
                  </AccordionHeader>
                  <AccordionPanel>
                    {carriagesData(train.carriagesData)}
                  </AccordionPanel>
                </AccordionNode>
              ))}
            </AccordionWithHeader>
          </Box>
        </Box>
      </div>
    );
  }
}