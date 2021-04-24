import React, {Fragment, useContext} from 'react'
import {Search} from '../Search'
import {Card} from '../Card'
import {GitHubContext} from '../../context/git-hub/git-hub-context'
import Loader from '../Loader/Loader'

export const Home = () => {
    const {loading, users} = useContext(GitHubContext)

    return (
        <Fragment>
            <Search/>
            <div className="row">
                {
                    loading
                        ? <Loader />
                        : users.map((user) => {
                            return (
                                <div className='col-sm-4 mb-4' key={user.id}>
                                    <Card user={user}/>
                                </div>
                            )
                        })
                }


            </div>

        </Fragment>
    )
}
