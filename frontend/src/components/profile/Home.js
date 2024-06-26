import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import styles from './../../styles/bootstrap.min.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Home() {
  const [user, setUser] = useState({ userName: '', userType: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BASE_URL}/checkSession`, { withCredentials: true })
      .then(response => {
        setUser({
          userName: response.data.name,
          userType: response.data.user_type,
        });
      })
      .catch(error => {
        console.error("¡Hubo un error al obtener los datos del usuario!", error);
        navigate('/');
      });
  }, [navigate]);

  const handleLogout = () => {
    axios.get(`${BASE_URL}/logout`, { withCredentials: true })
      .then(response => {
        setUser({ userName: '', userType: '' });
        navigate('/'); // Redirige al usuario a la página de inicio después de cerrar sesión
      })
      .catch(error => {
        console.error("¡Hubo un Error Cerrando la Sesión del Usuario!", error);
      });
  };

  return (
    <div className={styles.dark_bg}>
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top" className="rounded-4">
        <Container>
          <Navbar.Brand as={Link} to="/home">Magneto Switch Talent</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/my-profile">Mi Perfil</Nav.Link>
              <Nav.Link onClick={handleLogout}>Salir</Nav.Link>
            </Nav>
            {user.userName && (
              <Nav>
                <Nav.Link>Hi {user.userType === 'employee' ? 'employee' : 'leader'} {user.userName}</Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center mt-5">
            <h1 className="text-gradient mb-4">Magneto Switch Talent</h1>
            <div className="row mt-4">
              {user.userType === 'leader' && (
                <>
                  <div className="col-md-4">
                    <Link to="/create-opportunity" className="btn btn-primary btn-lg w-100 mb-4 rounded-4">Crear Oportunidades</Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/list-my-opportunities" className="btn btn-primary btn-lg w-100 mb-4 rounded-4">Ver Mis Oportunidades</Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/create-team" className="btn btn-primary btn-lg w-100 mb-4 rounded-4">Crear Equipos de Proyecto</Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/list-teams" className="btn btn-primary btn-lg w-100 mb-4 rounded-4">Ver Equipos</Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/list-postulations" className="btn btn-primary btn-lg w-100 mb-4 rounded-4">Ver Postulaciones</Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/list-my-evaluations" className="btn btn-primary btn-lg w-100 mb-4 rounded-4">Ver Mis Evaluaciones</Link>
                  </div>
                </>
              )}
              {user.userType === 'employee' && (
                <>
                  <div className="col-md-4">
                    <Link to="/list-opportunities" className="btn btn-primary btn-lg w-100 mb-4 rounded-4">Ver Oportunidades</Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/list-my-teams" className="btn btn-primary btn-lg w-100 mb-4 rounded-4">Ver Mis Equipos</Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/create-postulation" className="btn btn-primary btn-lg w-100 mb-4 rounded-4">Aplicacion Individual</Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/list-my-postulations" className="btn btn-primary btn-lg w-100 mb-4 rounded-4">Ver Mis Postulaciones</Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/list-my-evaluations" className="btn btn-primary btn-lg w-100 mb-4 rounded-4">Ver Mis Evaluaciones</Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
