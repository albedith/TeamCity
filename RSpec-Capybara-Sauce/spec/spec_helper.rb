require "sauce"
require "sauce/capybara"
require "capybara/rspec"

Sauce.config do |c|
  c[:start_tunnel] = false

  # Where these are defined, use them, otherwise use Win7/Chrome/40
  os = ENV["SELENIUM_PLATFORM"] || "Windows 7"
  browser = ENV["SELENIUM_BROWSER"] || "Chrome"
  version = ENV["SELENIUM_VERSION"] || 40

  c[:browsers] = [
    [os, browser, version]
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
