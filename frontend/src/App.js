import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

//auth
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

//profile
import Home from './components/profile/Home';
import UpdateProfile from './components/profile/UpdateProfile';
import MyProfile from './components/profile/MyProfile';
import ListMyEvaluations from './components/profile/ListMyEvaluations'

//Evaluation
import Evaluate from './components/team/Evaluate';

//Opportunity
import CreateOpportunity from './components/opportunity/CreateOpportunity';
import ListOpportunities from './components/opportunity/ListOpportunities';
import ListMyOpportunities from './components/opportunity/ListMyOpportunities';
import OpportunityDetail from './components/opportunity/OpportunityDetail';
import ListApplicants from './components/opportunity/ListApplicants';

//Team
import CreateTeam from './components/team/CreateTeam';
import ListTeams from './components/team/ListTeams';
import ListMyTeams from './components/team/ListMyTeams';
import TeamDetail from './components/team/TeamDetail';
import ListMembers from './components/team/ListMembers'

//Postulation
import CreatePostulation from './components/postulation/CreatePostulation';
import ListPostulations from'./components/postulation/ListPostulations';
import ListMyPostulations from'./components/postulation/ListMyPostulations';
import PostulationDetail from './components/postulation/PostulationDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/home' element={<Home />}></Route>

            {/* Opportunities */}
            <Route path='/create-opportunity' element={<CreateOpportunity />}></Route>
            <Route path='/list-opportunities' element={<ListOpportunities />}></Route>
            <Route path='/list-my-opportunities' element={<ListMyOpportunities />}></Route>
            <Route path='/opportunities/:id' element={<OpportunityDetail />}></Route>{/* Falta Front */}
            <Route path='/opportunities/:id/list-applicants' element={<ListApplicants />}></Route>{/* Falta Front */}

            {/* Teams Project */}
            <Route path='/create-team' element={<CreateTeam />}></Route>
            <Route path='/list-teams' element={<ListTeams />}></Route>
            <Route path='/list-my-teams' element={<ListMyTeams />}></Route>
            <Route path='/teams/:id' element={<TeamDetail />}></Route>{/* Falta Front */}
            <Route path='/teams/:id/list-members' element={<ListMembers />}></Route>{/* Falta Front */}

            {/* Postulations */}
            <Route path='/create-postulation' element={<CreatePostulation />}></Route>
            <Route path='/list-postulations' element={<ListPostulations />}></Route>
            <Route path='/list-my-postulations' element={<ListMyPostulations />}></Route>
            <Route path='/postulations/:id' element={<PostulationDetail />}></Route>{/* Falta Front */}

            {/* Evaluation */}
            <Route path='/evaluate-member/:id/:user_id/:member_email' element={<Evaluate />} />

            {/* Profile Funtions */}
            <Route path='/my-profile' element={<MyProfile />}></Route>
            <Route path='/update-profile' element={<UpdateProfile />}></Route>
            <Route path='/list-my-evaluations' element={<ListMyEvaluations />}></Route>

          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App