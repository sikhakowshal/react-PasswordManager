import './index.css'

const PasswordItem = props => {
  const {eachUser, showPassword} = props
  const {id, website, username, password, colorText} = eachUser
  const initial = username[0].toUpperCase()

  const onClickDeleteImg = () => {
    const {updateUserDetailsList} = props
    updateUserDetailsList(id)
  }

  return (
    <li className="password-item">
      <p className={`initial ${colorText}`}>{initial}</p>
      <div className="website-password-container">
        <p className="website">{website}</p>
        <p className="username">{username}</p>
        {showPassword ? (
          <p className="password">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars"
          />
        )}
      </div>
      <button
        data-testid="delete"
        className="delete-button"
        type="button"
        onClick={onClickDeleteImg}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem
