import React, {Fragment, useContext, useEffect} from 'react'
import {GitHubContext} from '../../context/git-hub/git-hub-context'
import Loader from '../Loader/Loader'
import {Link} from 'react-router-dom'
import {Repos} from '../Repos'

export const Profile = ({match}) => {
    const urlName = match.params.name
    const {getUser, getRepos, loading, user, repos} = useContext(GitHubContext)

    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
        // eslint-disable-next-line
    }, [])

    const {
        name, company, avatar_url, location,
        bio, blog, login, html_url, following,
        followers, public_repos, public_gists
    } = user

    if (loading) {
        return <Loader />
    }
    return (
        <Fragment>
            <Link to={'/'} className='btn btn-link'>На главную</Link>

            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img
                                src={avatar_url}
                                alt={name}
                                style={{width: '120px'}}
                            />
                            <h2>{name}</h2>
                            {location && <p><strong>Местоположение: </strong>{location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }
                            <a
                                href={html_url}
                                target="_blank"
                                rel="noreferrer"
                                className='btn btn-dark'>
                                Открыть профиль</a>
                            <ul>
                                {login && <li>
                                    <strong>Username:</strong>
                                    {login}
                                </li>}
                                {company && <li>
                                    <strong>Компания:</strong>
                                    {company}
                                </li>}
                                {blog && <li>
                                    <strong>Website:</strong>
                                    {blog}
                                </li>}
                            </ul>
                            <div className='badge badge-primary'>Подписчики: {followers}</div>
                            <div className='badge badge-success'>Подписан: {following}</div>
                            <div className='badge badge-info'>Репозитории: {public_repos}</div>
                            <div className='badge badge-dark'>Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos}/>
        </Fragment>
    )
}