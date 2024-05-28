import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import { getMachines as onGetMachines } from "../../Store/actions";

const Machines = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { machines } = useSelector( state => state.machineReducer);

  const onMachineClick = (data) => {
    navigate(`/alarms/${data.id}`)
  }

  useEffect(() => {
    if(machines && !machines.length)
      dispatch(onGetMachines())
  }, [dispatch, machines])

  return (
    <React.Fragment>
      <Container fluid className='p-0'>
        <Card>
          <CardHeader tag={'h3'} className='bg-transparent'>
            Machines
          </CardHeader>
          <CardBody id='machine-body'>
            <Row>
              <Col lg={9}>
                <Row>
                  {
                    machines.map((data, i) => {
                      return <Col key={i} lg={3} sm={12} className='p-2 my-5'>
                        <Card className='machineCard' >
                          <CardBody>
                            <div>
                              <div id='machineImage'>
                                <img src={data.image || 'https://st.depositphotos.com/2166177/2245/i/450/depositphotos_22451193-stock-photo-cog-wheels.jpg'} alt='machine' />
                              </div>
                              <div id='machineData'>
                                <CardHeader tag={'h5'} className='text-muted bg-transparent'>
                                  {data.name}
                                </CardHeader>
                                <CardBody>
                                  <div
                                  style={{
                                    minHeight: '15vh',
                                    overflow: 'hidden'
                                  }}>
                                    {data.description}
                                  </div>
                                </CardBody>
                                <div id='machineButton'>
                                  <Button
                                    color='dark'
                                    size='sm'
                                    className='rounded text-white w-75'
                                    onClick={() => {
                                      onMachineClick(data)
                                    }}
                                  >
                                    Show Alarms
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    })
                  }
                </Row>
              </Col>
              <Col lg={3} className='d-flex justify-content-center'>

                <Card style={{
                  position: 'sticky',
                  top: 0,
                  maxHeight: '83vh',
                  overflow: 'auto',
                  cursor: 'pointer'
                }} className='w-75 border border-danger bg bg-danger bg-opacity-10'>
                  <CardHeader tag={'h6'} className='text-white bg-danger py-3'>
                    Active Alarms
                  </CardHeader>
                  <CardBody>
                    {
                      machines.map((data, i) => {
                        return <Row key={i}>
                          <Col key={i} lg={12} sm={12}>
                            <div className='border border-danger p-3 rounded my-2 text-muted'>
                            <i className='alarmIcon bx bxs-bell-ring me-2 text-danger'></i>
                              {data.name}
                            </div>
                          </Col>
                        </Row>
                      })
                    }
                  </CardBody>
                </Card>

              </Col>
            </Row>

          </CardBody>
        </Card>
      </Container>
    </React.Fragment>
  )
}

export default Machines
