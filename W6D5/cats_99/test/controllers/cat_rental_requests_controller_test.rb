require 'test_helper'

class CatRentalRequestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @cat_rental_request = cat_rental_requests(:one)
  end

  test "should get index" do
    get cat_rental_requests_url
    assert_response :success
  end

  test "should get new" do
    get new_cat_rental_request_url
    assert_response :success
  end

  test "should create cat_rental_request" do
    assert_difference('CatRentalRequest.count') do
      post cat_rental_requests_url, params: { cat_rental_request: { cat_id: @cat_rental_request.cat_id, date: @cat_rental_request.date, end_date: @cat_rental_request.end_date, integer: @cat_rental_request.integer, start_date: @cat_rental_request.start_date, status: @cat_rental_request.status, string: @cat_rental_request.string } }
    end

    assert_redirected_to cat_rental_request_url(CatRentalRequest.last)
  end

  test "should show cat_rental_request" do
    get cat_rental_request_url(@cat_rental_request)
    assert_response :success
  end

  test "should get edit" do
    get edit_cat_rental_request_url(@cat_rental_request)
    assert_response :success
  end

  test "should update cat_rental_request" do
    patch cat_rental_request_url(@cat_rental_request), params: { cat_rental_request: { cat_id: @cat_rental_request.cat_id, date: @cat_rental_request.date, end_date: @cat_rental_request.end_date, integer: @cat_rental_request.integer, start_date: @cat_rental_request.start_date, status: @cat_rental_request.status, string: @cat_rental_request.string } }
    assert_redirected_to cat_rental_request_url(@cat_rental_request)
  end

  test "should destroy cat_rental_request" do
    assert_difference('CatRentalRequest.count', -1) do
      delete cat_rental_request_url(@cat_rental_request)
    end

    assert_redirected_to cat_rental_requests_url
  end
end
