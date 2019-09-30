require "application_system_test_case"

class CatRentalRequestsTest < ApplicationSystemTestCase
  setup do
    @cat_rental_request = cat_rental_requests(:one)
  end

  test "visiting the index" do
    visit cat_rental_requests_url
    assert_selector "h1", text: "Cat Rental Requests"
  end

  test "creating a Cat rental request" do
    visit cat_rental_requests_url
    click_on "New Cat Rental Request"

    fill_in "Cat", with: @cat_rental_request.cat_id
    fill_in "Date", with: @cat_rental_request.date
    fill_in "End date", with: @cat_rental_request.end_date
    fill_in "Integer", with: @cat_rental_request.integer
    fill_in "Start date", with: @cat_rental_request.start_date
    fill_in "Status", with: @cat_rental_request.status
    fill_in "String", with: @cat_rental_request.string
    click_on "Create Cat rental request"

    assert_text "Cat rental request was successfully created"
    click_on "Back"
  end

  test "updating a Cat rental request" do
    visit cat_rental_requests_url
    click_on "Edit", match: :first

    fill_in "Cat", with: @cat_rental_request.cat_id
    fill_in "Date", with: @cat_rental_request.date
    fill_in "End date", with: @cat_rental_request.end_date
    fill_in "Integer", with: @cat_rental_request.integer
    fill_in "Start date", with: @cat_rental_request.start_date
    fill_in "Status", with: @cat_rental_request.status
    fill_in "String", with: @cat_rental_request.string
    click_on "Update Cat rental request"

    assert_text "Cat rental request was successfully updated"
    click_on "Back"
  end

  test "destroying a Cat rental request" do
    visit cat_rental_requests_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Cat rental request was successfully destroyed"
  end
end
