require "sauce"
require "sauce/capybara"
require "capybara/rspec"

Sauce.config do |c|
  c[:start_tunnel] = false
  c[:browsers] = [
    [ENV["SELENIUM_PLATFORM"], ENV["SELENIUM_BROWSER"], ENV["SELENIUM_VERSION"]]
  ]

  # c[:browsers] = [
  #   ["Windows 8.1", "Chrome", "45"]
  # ]
end

Capybara.default_driver = :sauce
Capybara.javascript_driver = :sauce

RSpec.configure do |config|
  config.include Capybara::DSL
  config.include Capybara::RSpecMatchers
end
