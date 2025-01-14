Feature: A set of scenarios for testing the "example" module

  Scenario: Students comments on the forum
    Given There is a course
    And There is a forum
    And There is a topic
    And Student is on forum page
    When Student comment on forum
    Then The comment should be shown

#  Scenario: Teacher hides forum from students
#    Given There is a forum
#    And Teacher is on forum page
#    When Teacher hides forum
#    Then The forum is hidden