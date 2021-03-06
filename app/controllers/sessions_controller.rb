class SessionsController < ApplicationController
  skip_before_action :require_login, only: [:github]
  rescue_from ::ActiveRecord::RecordInvalid, with: :validation_failed

  def facebook
    auth = env["omniauth.auth"]
    account = User.from_omniauth(auth, current_user)
    if account.user.valid? 
      image_path = auth.info.image+ '?type=large'
      current_user.profile.update(image_url: image_path)
      redirect_to current_user.page
    end
  end

  def github
    auth = env["omniauth.auth"]
    showMsg = false
    if current_user.blank?
        user = User.find_by_email(auth.info.email)
        if user.blank?
          @sa = SocialAccount.where(provider: auth.provider, uid: auth.uid, email: auth.info.email).first
          user = @sa.user if !@sa.blank?
        end
    else
        user = current_user
    end
    if user.blank?
        user = User.create!(email: auth.info.email , password: 'password123' , password_confirmation: 'password123')
        Profile.create!(name: auth.info.name , user: user)
        showMsg = true
    end   
    account = User.from_omniauth(auth, user)

    if account.user.valid? 
      flash[:info] = "Your password is 'password123' we recommend you to reset it." if showMsg
      session[:user_id] = account.user.id
      flash[:auth_token] = "#{account.user.auth_token}"
      flash.keep(:auth_token)
      user = User.find(account.user.id)
      redirect_to user.page
    end
  end

  def stackexchange
    auth = env["omniauth.auth"]
    account = User.from_omniauth(auth, current_user)
    if account.user.valid? 
      redirect_to current_user.page
    end
  end

  def destroy
    reset_session
    redirect_to root_path
  end 

  def validation_failed
    flash[:danger] = "This social account is already connected to other user"
    redirect_to current_user.page
  end

end
